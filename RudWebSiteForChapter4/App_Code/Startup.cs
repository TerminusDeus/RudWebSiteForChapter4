using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RudWebSiteForChapter4.Startup))]
namespace RudWebSiteForChapter4
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
