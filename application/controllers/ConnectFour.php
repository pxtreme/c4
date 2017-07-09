<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ConnectFour extends CI_Controller {
        function __construct(){
            $this->GameDataFile = $_SERVER['DOCUMENT_ROOT']."/c4/static/data/GameData.json";
            parent::__construct();
        }
	public function index()
	{
            $this->load->view('header');
            $this->load->view('content');
            $this->load->view('footer');
	}
        function UpdateJsonFile($mode) {
            $r_data = array(
                "Mode" => "$mode"
            );
            $filename = $this->GameDataFile;
            $fp = fopen($filename, 'w');
            fwrite($fp, json_encode($r_data));
            fclose($fp);
            exit;
        } 
        function getJsonFile() {
            $file = file_get_contents($this->GameDataFile);
            $f = json_decode($file);
            echo $f->Mode;
            exit;
        }
            
}
