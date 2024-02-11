<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculation</title>
</head>
<body>
<form action="try.php" method="post">
    <table border="1px">
        <tr>
            <td>Lott No :-</td>
            <td><input type="text" name="lott"></td>
        </tr>
        <tr>
            <td>Enter Ruff :-</td>
            <td><input type="text" name="ruff"></td>
        </tr>
        <tr>
            <td>Enter Size*100 :-</td>
            <td><input type="text" name="size1"></td>
        </tr>
        <tr>
            <td>Ruff Polish :-</td>
            <td><input type="text" name="per1"></td>
        </tr>
        <tr>
            <td>Less :-</td>
            <td><input type="text" name="per2"></td>
        </tr>
        <tr align="center">
            <td colspan="2"><input type="reset" value="Reset">
            <input type="submit" name="submit" value="Calculate"></td>
        </tr>
    </table>
</form>
</body>
</html>
<?php
    if(isset($_POST['submit']))
    {
        $lott=$_POST["lott"];
        $ruff=$_POST['ruff'];
        $size1=$_POST['size1'];
        $per1=$_POST['per1'];
        $per2=$_POST['per2'];

        $total = $ruff+$size1;
        $cal1 = ($total*100)/$per1;
        $cal2 = ($cal1*100)/$per2;

        $con=mysqli_connect('localhost','root','',"haresh");
        $insert="insert into data values ('$lott','$ruff','$size1','$total','$per1','$cal1','$per2','$cal2')";
        $query1=mysqli_query($con,$insert);

        $select="select * from data";
        $query2=mysqli_query($con,$select);

        if($query2)
        {
            while($row=mysqli_fetch_array($query2))
            {?><table>
                    <tr>
                        <td><?php echo"$row[Lott]"; ?></td>
                    </tr>
                    </table>
            <?php}
        }
    }?>
    </table>