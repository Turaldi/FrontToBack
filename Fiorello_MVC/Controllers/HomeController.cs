using Fiorello_MVC_Practic.DAL;
using Fiorello_MVC_Practic.Models;
using Fiorello_MVC_Practic.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Fiorello_MVC_Practic.Controllers
{
    public class HomeController : Controller
    {
        private readonly Context _context;
        public HomeController(Context context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            List<Slider> sliders = _context.Sliders.ToList();
            SliderDesc sliderDesc = _context.SliderDescs.FirstOrDefault();
            HomeVM homeVm = new HomeVM();
            homeVm.Sliders = sliders;
            homeVm.SliderDesc = sliderDesc;
            return View(homeVm);
        }
    }
}
