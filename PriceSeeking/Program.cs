using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PriceSeeking.GetAllInfo;

namespace PriceSeeking
{
    internal class Program
    {
        [STAThread]
        static void Main(string[] args)
        {
         GetAdConditions Pg = new GetAdConditions();
            Pg.GetHtml();
            Console.ReadLine();
        }
    }
}
