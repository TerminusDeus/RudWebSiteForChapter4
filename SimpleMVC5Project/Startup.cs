using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SimpleMVC5Project.Startup))]
namespace SimpleMVC5Project
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
