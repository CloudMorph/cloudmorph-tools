using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CloudMorphControl.Services.Realms;
using ServiceStack.ServiceInterface;

namespace CloudMorphDashboard.Services.Realms
{
    public class RealmsService : RestServiceBase<Realm>
    {
        public override object OnGet(Realm request)
        {
            return new Realm { Name = "RealmTest" };
        }
    }
}