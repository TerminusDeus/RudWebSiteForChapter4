<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Workers.aspx.cs" Inherits="Workers" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <title></title>
    <style>
        /*Here I will add some css for looks good*/
        .myGrid {
            border: 1px solid #ddd;
            margin: 15px;
            -webkit-border-radius: 3px 3px 0 0;
            -moz-border-radius: 3px 3px 0 0;
            border-radius: 3px 3px 0 0;
        }

            .myGrid td {
                vertical-align: top;
            }

        .header {
            overflow: hidden;
            position: relative;
            border-bottom: 1px solid #ddd;
            height: 30px;
        }

            .header th {
                color: #222;
                font-weight: normal;
                line-height: 40px;
                text-align: left;
                /* text-shadow: 0 1px #FFFFFF; */
                white-space: nowrap;
                border-right: 1px solid #ddd;
                border-bottom: 2px solid #ddd;
                padding: 0px 15px 0px 15px;
                -webkit-border-radius: 1px;
                -moz-border-radius: 1px;
            }

        .trow1 {
            background: #f9f9f9;
        }

        .trow2 {
            background: #fff;
        }

            .trow1 td, .trow2 td {
                color: #555;
                line-height: 18px;
                padding: 9px 5px;
                text-align: left;
                border-right: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                text-align: left;
            }

        input[type='text'], select {
            border: 1px solid #b8b8b8;
            border-radius: 3px;
            color: #999999;
            float: left;
            height: 22px;
            padding: 0 5px;
            position: relative;
            width: 185px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:GridView ID="myGridview" runat="server" AutoGenerateColumns="false"
                DataKeyNames="WorkerID,DepartmentID,PostID,PostTitle,DepartmentTitle,FirstName" CellPadding="10" CellSpacing="0"
                ShowFooter="true"
                CssClass="myGrid" HeaderStyle-CssClass="header" RowStyle-CssClass="trow1"
                AlternatingRowStyle-CssClass="trow2"
                OnRowCommand="myGridview_RowCommand"
                OnRowCancelingEdit="myGridview_RowCancelingEdit"
                OnRowDeleting="myGridview_RowDeleting"
                OnRowEditing="myGridview_RowEditing"
                OnRowUpdating="myGridview_RowUpdating" Width="1072px">
                <Columns>
                    <asp:TemplateField>
                        <HeaderTemplate>Worker Person</HeaderTemplate>
                        <ItemTemplate><%#Eval("FirstName") %></ItemTemplate>
                        <EditItemTemplate>
                            <asp:TextBox ID="txtFirstName" runat="server" Text='<%#Bind("FirstName") %>' />
                            <asp:RequiredFieldValidator ID="rfCPEdit" runat="server" ForeColor="Red" ErrorMessage="*"
                                Display="Dynamic" ValidationGroup="edit" ControlToValidate="txtFirstName">Required</asp:RequiredFieldValidator>
                        </EditItemTemplate>
                        <FooterTemplate>
                            <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox><br />
                            <asp:RequiredFieldValidator ID="rfCP" runat="server" ErrorMessage="*"
                                ForeColor="Red" Display="Dynamic" ValidationGroup="Add" ControlToValidate="txtFirstName">Required</asp:RequiredFieldValidator>
                        </FooterTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField>
                        <HeaderTemplate>Worker No</HeaderTemplate>
                        <ItemTemplate><%#Eval("WorkerID") %></ItemTemplate>
                        <EditItemTemplate>
                            <asp:TextBox ID="txtWorkerID" runat="server" Text='<%#Bind("WorkerID") %>' />
                            <asp:RequiredFieldValidator ID="rfCNEdit" runat="server" ErrorMessage="*"
                                Display="Dynamic" ForeColor="Red" ValidationGroup="edit" ControlToValidate="txtWorkerID">Required</asp:RequiredFieldValidator>
                        </EditItemTemplate>
                        <FooterTemplate>
                            <asp:TextBox ID="txtWorkerID" runat="server"></asp:TextBox><br />
                            <asp:RequiredFieldValidator ID="rfCN" runat="server" ErrorMessage="*"
                                ForeColor="Red" Display="Dynamic" ValidationGroup="Add" ControlToValidate="txtWorkerID">Required</asp:RequiredFieldValidator>
                        </FooterTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField>
                        <HeaderTemplate>Department</HeaderTemplate>
                        <ItemTemplate><%#Eval("DepartmentTitle") %></ItemTemplate>
                        <EditItemTemplate>
                            <asp:DropDownList ID="ddDepartment" runat="server" AutoPostBack="true"
                                OnSelectedIndexChanged="ddDepartment_SelectedIndexChanged">
                                <asp:ListItem Text="Select Country" Value="0"></asp:ListItem>
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="rfCEdit" runat="server" ErrorMessage="*"
                                ForeColor="Red" Display="Dynamic" ValidationGroup="edit" ControlToValidate="ddDepartment" InitialValue="0">
                            Required
                            </asp:RequiredFieldValidator>
                        </EditItemTemplate>

                        <FooterTemplate>
                            <asp:DropDownList ID="ddDepartment" runat="server" AutoPostBack="true" OnSelectedIndexChanged="ddDepartment_SelectedIndexChanged">
                                <asp:ListItem Text="Select Department" Value="0"></asp:ListItem>
                            </asp:DropDownList>
                            <br />
                            <asp:RequiredFieldValidator ID="rfC" runat="server" ErrorMessage="*"
                                ForeColor="Red" Display="Dynamic" ValidationGroup="Add" ControlToValidate="ddDepartment" InitialValue="0">Required</asp:RequiredFieldValidator>
                        </FooterTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField>
                        <HeaderTemplate>Post</HeaderTemplate>
                        <ItemTemplate><%#Eval("PostTitle") %></ItemTemplate>
                        <EditItemTemplate>
                            <asp:DropDownList ID="ddPost" runat="server">
                                <asp:ListItem Text="Select Post" Value="0"></asp:ListItem>
                            </asp:DropDownList>
                            <asp:RequiredFieldValidator ID="rfSEdit" runat="server" ErrorMessage="*"
                                ForeColor="Red" Display="Dynamic" ValidationGroup="edit" ControlToValidate="ddPost" InitialValue="0">
                            Required
                            </asp:RequiredFieldValidator>
                        </EditItemTemplate>

                        <FooterTemplate>
                            <asp:DropDownList ID="ddPost" runat="server">
                                <asp:ListItem Text="Select Post" Value="0"></asp:ListItem>
                            </asp:DropDownList><br />
                            <asp:RequiredFieldValidator ID="rfS" runat="server" ErrorMessage="*"
                                ForeColor="Red" Display="Dynamic" ValidationGroup="Add" ControlToValidate="ddPost"
                                InitialValue="0">Required</asp:RequiredFieldValidator>
                        </FooterTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField>
                        <ItemTemplate>
                            <asp:LinkButton ID="lbEdit" runat="server" CommandName="Edit">Edit</asp:LinkButton>
                            &nbsp;|&nbsp;
                        <asp:LinkButton ID="lbDelete" runat="server" CommandName="Delete">Delete</asp:LinkButton>
                            &nbsp;|&nbsp;
                        <asp:LinkButton ID="lbView" runat="server" OnCommand="lbView_Command" CommandArgument="<%#((GridViewRow)Container).RowIndex%>" >View</asp:LinkButton>
                        </ItemTemplate>
                        <EditItemTemplate>
                            <asp:LinkButton ID="lbUpdate" runat="server" CommandName="Update" ValidationGroup="edit">Update</asp:LinkButton>
                            &nbsp;|&nbsp;
                        <asp:LinkButton ID="lbCancel" runat="server" CommandName="Cancel">Cancel</asp:LinkButton>
                        </EditItemTemplate>
                        <FooterTemplate>
                            <asp:Button ID="btnInsert" runat="server" Text="Save" CommandName="Insert" ValidationGroup="Add" />
                        </FooterTemplate>
                    </asp:TemplateField>
                </Columns>
                <script runat="server">

                    void CommandBtn_Click(Object sender, CommandEventArgs e)
                    {

                    }

                </script>

            </asp:GridView>
        </div>
    </form>
</body>
</html>
