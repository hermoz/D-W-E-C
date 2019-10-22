<?php
    $conn = NULL;
        try{
            $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", 'root', '');
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $sql = "SELECT * FROM characters WHERE id=$id";
            }else if(isset($_GET['Alignment']) && isset($_GET['Gender'])){
                
                $Gender = $_GET['Gender'];
                $Alignment = $_GET['Alignment'];
                $sql = "SELECT * FROM characters WHERE Alignment='$Alignment' and Gender = '$Gender'";
            }else{
                $sql = "SELECT * FROM characters";
            }
            $stm=$con->prepare($sql);
            $stm->execute();
            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultSet);
            
        }catch (PDOException $e){
            echo "Error ".$e->getMessage();
        }

