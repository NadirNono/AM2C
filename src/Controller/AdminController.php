<?php

namespace App\Controller;

use App\Controller\AdminController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;



class AdminController extends Controller
{
    /**
     * @Route("/admin",name="adminpage")
     */
    public function admin()
    {
        return $this->render('admin.html.twig', ['title' => "AM2C"]);
    }
}


?>