using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using HtmlAgilityPack;
using System.Windows.Forms;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using HtmlDocument = HtmlAgilityPack.HtmlDocument;
using System.Runtime.Serialization;
using System.Windows.Shapes;
using System.Text.RegularExpressions;


namespace PriceSeeking.GetAllInfo
{
    public class GetAdConditions
    {
        string Vendedor { get; set; }
        string VendedorDestaque { get; set; }
        string Preço { get; set; }
        string Frete { get; set; }
        string Produto { get; set; }
        char Quantidade { get; set; }
        string PreçoDestaque { get; set; }
        public void GetHtml()
        {
            var options = new ChromeOptions();
            options.AddArgument("--headless");

            // Run in headless mode
            using (IWebDriver driver = new ChromeDriver(options))
            {
                options.AddArgument("--disable-logging");
                // Navigate to the URL
                string url = "https://www.amazon.com.br/gp/offer-listing/B07STXYY6T/ref=dp_olp_NEW_mbc?ie=UTF8&condition=NEW";
                driver.Navigate().GoToUrl(url);

                // Wait for the page to load completely (adjust as needed)
                System.Threading.Thread.Sleep(100);// Simple wait (better use WebDriverWait)

                // Get the page source after JavaScript execution
                string pageSource = driver.PageSource;

                // Use HTML Agility Pack to parse the source
                var htmlDoc = new HtmlDocument();
                htmlDoc.LoadHtml(pageSource);

                // Select elements using HTML Agility Pack
                var nodes = htmlDoc.DocumentNode.SelectNodes("//*[@id=\"aod-offer\"]");

                var productTitle = htmlDoc.DocumentNode.SelectSingleNode("//*[@id=\"productTitle\"]");
                this.Produto = productTitle.InnerText;

                var preçoPrincipal = htmlDoc.DocumentNode.SelectSingleNode("//*[@id=\"corePrice_feature_div\"]/div/div/span[1]/span[1]");
                this.PreçoDestaque = preçoPrincipal.InnerText;

                var vendedorDestaqueOld = htmlDoc.DocumentNode.SelectSingleNode("//*[@id=\"sellerProfileTriggerId\"]");
                this.VendedorDestaque = vendedorDestaqueOld.InnerText;

                Console.WriteLine($"Anuncio destaque:\n\n{Produto.TrimStart()}\n{PreçoDestaque}\n{VendedorDestaque}\n");

                int foundQuantidade = 0;
                int foundFreteValor = 0;

               
                try
                {
                    foreach (var node in nodes)
                    {
                        var all = node.InnerText.Split('\n');
                        bool freteOp = false;

                        foreach (var SingleLine in all)
                        {
                            if (!string.IsNullOrWhiteSpace(SingleLine))
                            {
                                var line = SingleLine.Replace(" ", String.Empty).TrimStart();

                                if (line.Contains("Qtd"))
                                {
                                    foundQuantidade = line.IndexOf("1");
                                    var quantidadeClean = (line.Substring(foundQuantidade, 10).Trim('E', 'n', 'v', 'i', 'a', 'd', 'o', 'p', 'e', 'l', 'a'));
                                    char[] allChar = quantidadeClean.ToCharArray();
                                    this.Quantidade = (allChar[quantidadeClean.Length - 1]);
                                    Console.WriteLine($"Estoque: {this.Quantidade} unidades");
                                }

                                if (line.Contains("EntregaR$&nbsp"))
                                {
                                    foundFreteValor = line.IndexOf("EntregaR$&nbsp");
                                    var freteClean = (line.Substring(foundFreteValor, 20));
                                    this.Frete = freteClean.ToString().Trim('E', 'n', 't', 'r', 'e', 'g', 'a', 'R', '$', 'n', 'b', 's', '&', 'p', ';');
                                    freteOp = true;
                                    Console.WriteLine($"Frete: {this.Frete}");
                                }

                                if (line.Contains("R$&nbsp;") && (!line.Contains("Entrega")))
                                {
                                    foundFreteValor = line.IndexOf("R$&nbsp;");
                                    var PriceClean = (line.Substring(foundFreteValor, 14));
                                    this.Preço = PriceClean.Trim('c', 'R', '$', '&', 'n', 'b', 's', 'p', ';', ':', ',');
                                    Console.WriteLine($"\nValor: R${this.Preço} Reais");
                                }

                                if (line.Contains("Vendidopor"))
                                {

                                    var foundVendedor = line.IndexOf("Vendidopor");
                                    var trash = line.IndexOf('(');

                                    var vendedorClean = (line.Substring(foundVendedor + 10, trash - foundVendedor - 10));
                                    Console.WriteLine(vendedorClean);
                                }
                            }
                        }
                        if (freteOp == false)
                        {
                            this.Frete = "Frete Gratis";
                            Console.WriteLine($"{this.Frete}");
                        }
                    } }catch { }

            } }
              
            }
        }
    

