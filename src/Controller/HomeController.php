<?php

namespace App\Controller;

use App\Controller\HomeController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;



class HomeController extends Controller
{
    /**
     * @Route("/",name="homepage")
     */
    public function home()
    {
        return $this->render('home.html.twig', ['title' => "AM2C"]);
    }
}


?>