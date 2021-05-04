<?php 

//* servidro 
$servidor = "localhost";

//* nombre de la base de datos 
$baseDatod = "prueba";

//* usuario de la base de datos 
$usuarioBD = "root";

//* contraseña de la base de datos 
$claveBD = "";

//* crear conexion 
$conn = new mysqli($servidor, $usuarioBD, $claveBD, $baseDatod);

if ( $conn->connect_error){
    die("Conexion fallida: " . $conn->connect_error);
}

//* obtener elnJSON recibido en la variable $ json 
$json = file_get_contents('php://input');

//* decodifica el JSON recibido y lo almacena en la variable $ obj
$obj = json_decode($json,true);

$correo=$obj['correo'];
$clave=$obj['clave'];

$sql = "SELECT id, correo, clave, nombre FROM usuario WHERE correo = '$correo' && clave='$clave'";

$result = $conn->query($sql);

if($result->num_rows > 0)
{
    //REGISTRO VALIDO 
    while($row[] = $result->fetch_assoc()){
        $tem=$row;
    }
    echo json_encode("Ok");
}else
{
    echo json_encode("No");
}

?>
