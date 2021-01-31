<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-6.2.0/src/Exception.php';
    require 'PHPMailer-6.2.0/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->Charset = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('0126@nur.kz', 'Илья Дубиневич');
    //Кому отправить
    $mail->addAddress('alikhanilyassov@gmail.com');
    // Тема письма
    $mail->Subject = 'Привет, новая заявка!';

    //Тело письма
    $body = '<h1>Встречайте супер письмо</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }

    //Отправляем
    $response = ['message' => $message];
if (!$mail->send()) {
    $response['error'] = 'Email sending error';
}


header('Content-type: application/json');
echo json_encode($response);
?>