<?php

namespace App\Controller;

use App\Controller\UserController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;



class UserController extends Controller
{
    /**
     * @Route("/user",name="userpage")
     */
    public function user()
    {
        return $this->render('user.html.twig', ['title' => "AM2C"]);
    }
}


?>