using BLL.Organization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Workers : System.Web.UI.Page
{
    /// <summary>
    /// page load event for show Database data in the gridview
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            PopulateWorkers();
        }
    }

    // based on: http://www.dotnetawesome.com/2015/04/part-2-how-to-implement-basic-crud-functionality-entity-framework-aspnet-webforms.html
    #region PART1
    /// <summary>
    /// 
    /// </summary>
    protected void myGridview_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        //Insert new worker
        if (e.CommandName == "Insert")
        {
            Page.Validate("Add");
            if (Page.IsValid)
            {
                var fRow = myGridview.FooterRow;
                TextBox txtFirstName = (TextBox)fRow.FindControl("txtFirstName");
                TextBox txtWorkerID = (TextBox)fRow.FindControl("WorkerID");
                DropDownList ddDepartment = (DropDownList)fRow.FindControl("ddDepartment");
                DropDownList ddPost = (DropDownList)fRow.FindControl("ddPost");
                using (OrganizationEntities dc = new OrganizationEntities())
                {

                    //Here in this example we have done a little mistake // class name and page name is Same (worker) 
                    // We will remove worker page , as its not in use

                    dc.Workers.Add(new Worker
                    {
                        FirstName = txtFirstName.Text.Trim(),
                        WorkerID = Convert.ToInt32(txtWorkerID.Text.Trim()),
                        DepartmentID = Convert.ToInt32(ddDepartment.SelectedValue),
                        PostID = Convert.ToInt32(ddPost.SelectedValue)
                    });
                    dc.SaveChanges();
                    PopulateWorkers();
                }
            }
        }
    }

    // function for fetch Department from database
    private List<Department> PopulateCountry()
    {
        using (OrganizationEntities dc = new OrganizationEntities())
        {
            return dc.Departments.OrderBy(a => a.DepartmentTitle).ToList();
        }
    }

    private List<Post> PopulateState(int departmentID)
    {
        using (OrganizationEntities dc = new OrganizationEntities())
        {
            return dc.Posts.Where(a => a.DepartmentID.Equals(departmentID)).OrderBy(a => a.PostTitle).ToList();
        }
    }

    // function for bind departments with dropdown
    private void BindDepartment(DropDownList ddDepartment, List<Department> department)
    {
        ddDepartment.Items.Clear();
        ddDepartment.Items.Add(new ListItem { Text = "Select department", Value = "0" });
        ddDepartment.AppendDataBoundItems = true;

        ddDepartment.DataTextField = "DepartmentTitle";
        ddDepartment.DataValueField = "DepartmentID";
        ddDepartment.DataSource = department;
        ddDepartment.DataBind();
    }

    /// <summary>
    /// function for bind posts with dropdown
    /// </summary>
    /// <param name="ddPost"></param>
    /// <param name="departmentID"></param>
    private void BindState(DropDownList ddPost, int departmentID)
    {
        ddPost.Items.Clear();
        ddPost.Items.Add(new ListItem { Text = "Select Post", Value = "0" });
        ddPost.AppendDataBoundItems = true;

        ddPost.DataTextField = "PostTitle";
        ddPost.DataValueField = "PostID";
        ddPost.DataSource = departmentID > 0 ? PopulateState(departmentID) : null;
        ddPost.DataBind();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void ddDepartment_SelectedIndexChanged(object sender, EventArgs e)
    {
        //write code for cascade dropdown
        string departmentID = ((DropDownList)sender).SelectedValue;
        var dd = (DropDownList)((System.Web.UI.WebControls.ListControl)(sender)).Parent.Parent.FindControl("ddPost");
        BindState(dd, Convert.ToInt32(departmentID));
    }

    /// <summary>
    /// function for fetch data from database and show in the gridview (Read Operation of CRUD)
    /// </summary>
    private void PopulateWorkers()
    {
        List<Worker> allWorkers = null;
        using (OrganizationEntities dc = new OrganizationEntities())
        {
            var workers = (from a in dc.Workers
                           join b in dc.Departments on a.DepartmentID equals b.DepartmentID
                           join c in dc.Posts on a.PostID equals c.PostID
                           select new
                           {
                               a,
                               b.DepartmentTitle,
                               c.PostTitle
                           });
            if (workers != null)
            {
                allWorkers = new List<Worker>();
                foreach (var i in workers)
                {
                    Worker c = i.a;
                    c.DepartmentTitle = i.DepartmentTitle;
                    c.PostTitle = i.PostTitle;
                    allWorkers.Add(c);
                }
            }

            if (allWorkers == null || allWorkers.Count == 0)
            {
                //trick to show footer when there is no data in the gridview
                allWorkers.Add(new Worker());
                myGridview.DataSource = allWorkers;
                myGridview.DataBind();
                myGridview.Rows[0].Visible = false;
            }
            else
            {
                myGridview.DataSource = allWorkers;
                myGridview.DataBind();
            }

            //Populate & bind department
            if (myGridview.Rows.Count > 0)
            {
                DropDownList dd = (DropDownList)myGridview.FooterRow.FindControl("ddDepartment");
                BindDepartment(dd, PopulateCountry());
            }
        }
    }
    #endregion

    // based on: http://www.dotnetawesome.com/2015/04/part-2-how-to-implement-basic-crud-functionality-entity-framework-aspnet-webforms.html
    #region PART2
    /// <summary>
    /// Event OnRowEditing (myGridview_RowEditing) for edit mode
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void myGridview_RowEditing(object sender, GridViewEditEventArgs e)
    {
        //Get Country ID and State ID of editable row
        string departmentID = myGridview.DataKeys[e.NewEditIndex]["DepartmentID"].ToString();
        string PostID = myGridview.DataKeys[e.NewEditIndex]["PostID"].ToString();
        //Open Edit Mode
        myGridview.EditIndex = e.NewEditIndex;
        PopulateWorkers();
        //Populate Country And State and Bind
        DropDownList ddDepartment = (DropDownList)myGridview.Rows[e.NewEditIndex].FindControl("ddDepartment");
        DropDownList ddPost = (DropDownList)myGridview.Rows[e.NewEditIndex].FindControl("ddPost");
        if (ddDepartment != null && ddPost != null)
        {
            BindDepartment(ddDepartment, PopulateCountry());
            ddDepartment.SelectedValue = departmentID;
            BindState(ddPost, Convert.ToInt32(departmentID));
            ddPost.SelectedValue = PostID;
        }
    }

    protected void myGridview_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
    {
        //Cancel Edit Mode 
        myGridview.EditIndex = -1;
        PopulateWorkers();
    }

    protected void myGridview_RowUpdating(object sender, GridViewUpdateEventArgs e)
    {
        //Validate Page
        Page.Validate("edit");
        if (!Page.IsValid)
        {
            return;
        }

        //Get Worker ID
        int workerID = (int)myGridview.DataKeys[e.RowIndex]["WorkerID"];

        //Find Controls 
        TextBox txtFirstName = (TextBox)myGridview.Rows[e.RowIndex].FindControl("txtFirstName");
        TextBox txtWorkerID = (TextBox)myGridview.Rows[e.RowIndex].FindControl("txtWorkerID");
        DropDownList ddCountry = (DropDownList)myGridview.Rows[e.RowIndex].FindControl("ddDepartment");
        DropDownList ddState = (DropDownList)myGridview.Rows[e.RowIndex].FindControl("ddPost");
        //Get Values (updated) and Save to database
        using (OrganizationEntities dc = new OrganizationEntities())
        {
            var v = dc.Workers.Where(a => a.WorkerID.Equals(workerID)).FirstOrDefault();
            if (v != null)
            {
                v.FirstName = txtFirstName.Text.Trim();
                v.WorkerID = Convert.ToInt32(txtWorkerID.Text.Trim());
                v.DepartmentID = Convert.ToInt32(ddCountry.SelectedValue);
                v.PostID = Convert.ToInt32(ddState.SelectedValue);
            }
            dc.SaveChanges();
            myGridview.EditIndex = -1;
            PopulateWorkers();
        }
    }

    protected void myGridview_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        int workerID = (int)myGridview.DataKeys[e.RowIndex]["WorkerID"];
        using (OrganizationEntities dc = new OrganizationEntities())
        {
            var v = dc.Workers.Where(a => a.WorkerID.Equals(workerID)).FirstOrDefault();
            if (v != null)
            {
                dc.Workers.Remove(v);
                dc.SaveChanges();
                PopulateWorkers();
            }
        }
    }
    #endregion

    protected void lbView_Command(object sender, CommandEventArgs e)
    {
        // передача параметров из текущей строки
        string workerID, firstName, post, department = string.Empty;
        int rowIndex = Convert.ToInt32(e.CommandArgument);
        workerID = myGridview.DataKeys[rowIndex]["PostTitle"].ToString();
        firstName = myGridview.DataKeys[rowIndex]["FirstName"].ToString();
        post = myGridview.DataKeys[rowIndex]["PostTitle"].ToString();
        department = myGridview.DataKeys[rowIndex]["DepartmentTitle"].ToString();
        Response.Redirect("WorkerViewPage.aspx?firstName=" + firstName + "&workerID=" + workerID + "&post=" + post + "&department=" + department);
    }
}