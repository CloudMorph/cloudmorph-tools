using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.ServiceHost;

namespace CloudMorphDashboard
{
    public class HelloService1 : IService<Hello1>
    {
        public object Execute(Hello1 request)
        {
            return new HelloResponse1 { Result = "Hello, " + request.Name };
        }
    }
}