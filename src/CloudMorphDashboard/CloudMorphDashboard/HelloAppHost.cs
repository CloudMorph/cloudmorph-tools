using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CloudMorphDashboard.svc.packages;
using Funq;
using ServiceStack.WebHost.Endpoints;

namespace CloudMorphDashboard
{
    public class HelloAppHost : AppHostBase
    {
        //Tell Service Stack the name of your application and where to find your web services
        public HelloAppHost() : base("Hello Web Services", typeof(HelloService1).Assembly) { }

        public override void Configure(Container container)
        {
            //register user-defined REST-ful urls
            Routes
              .Add<Hello1>("/hello")
              .Add<Hello1>("/hello/{Name}")
              .Add<Package>("/packages")
              .Add<Package>("/packages/{id}");

            container.Register(new PackageRepository());
        }
    }
}