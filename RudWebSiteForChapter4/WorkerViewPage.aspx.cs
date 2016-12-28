using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class WorkerViewPage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string workerID = Request.QueryString["workerID"];
        string firstName = Request.QueryString["firstName"];
        string post = Request.QueryString["post"];
        string department = Request.QueryString["department"];

        lbWorkerID.Text = workerID;
        lbFirstName.Text = firstName;
        lbPostTitle.Text = post;
        lbDepartmentTitle.Text = department;

        // The first line of code looks for the key “fullname” only in the query string; 
        // the second line looks for the key “fullname” in all of the HTTP request collections.
        // string fullname1 = Request.QueryString["fullname"];
        // string fullname2 = Request["fullname"];
    }

    protected void btnBackToTable_Click(object sender, EventArgs e)
    {
        Response.Redirect("Workers.aspx");
    }
}