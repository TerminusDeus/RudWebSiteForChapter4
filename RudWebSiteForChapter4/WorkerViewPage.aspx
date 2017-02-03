<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WorkerViewPage.aspx.cs" Inherits="WorkerViewPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title></title>
</head>
<body style="background-image:url(http://static.tumblr.com/379ccba5a68397e5366956db60585819/jfvf6fl/0Mmo9jcu7/tumblr_static_9859sbyjy1gcg4owogwc4gkss.png)";>
    <form id="form1" runat="server">
    <div style="height: 177px">
    
        <asp:Label ID="lbPageTitle" runat="server" Text="Current worker info: "></asp:Label>

        <br />
        <br />
        WorkerID :&nbsp;
        <asp:Label ID="lbWorkerID" runat="server" Text="Value"></asp:Label>
        <br />
        FirstName :&nbsp;&nbsp;
        <asp:Label ID="lbFirstName" runat="server" Text="Value"></asp:Label>
        <br />
        PostTitle :
        <asp:Label ID="lbPostTitle" runat="server" Text="Value"></asp:Label>
        <br />
        DepartmentTitle :
        <asp:Label ID="lbDepartmentTitle" runat="server" Text="Value"></asp:Label>
        <br />
        <br />
        <asp:Button ID="btnBackToTable" runat="server" OnClick ="btnBackToTable_Click" Text="Back to table" />
    
    </div>
    </form>
</body>
</html>
