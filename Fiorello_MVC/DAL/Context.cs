using Fiorello_MVC_Practic.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello_MVC_Practic.DAL
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options):base(options)
        {

        }
        public DbSet<Slider> Sliders { get; set; }
        public DbSet<SliderDesc> SliderDescs { get; set; }
    }
}
