<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

    

<body>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-8">
            
                <div class="card">
                    <div class="card-title">
                        <h3>Register</h3>
                    </div>
                    <br>
                    <br>
                    <div class="card-body">
                        <form action="registerprocess.php" method="POST">
                            <div class="input-group m-2">
                               
                                <input type="text" class="form-control" name="fname" required>
                                <label class="input-label">First Name:</label>
                                
                            </div>
                            <div class="input-group m-2">
                                
                                <input type="text" class="form-control" name="lname" required>
                                <label class="input-label">Last Name:</label>
                            </div>
                            <div class="input-group m-2">
                                
                                <input type="email" class="form-control" name="email" required>
                                <label class="input-label">Email:</label>
                            </div>
                            <div class="input-group m-2">
                                
                                <input type="password" class="form-control" name="password" required>
                                <label class="input-label">Password:</label>
                            </div>
                            <hr/>
                            <button type="submit" class="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
<script src="script.js"></script>
</html>
