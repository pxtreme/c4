<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ConnectFour extends CI_Controller {
//        var $GameDataFile;
//        var $PlayerStatusFile;
//        var $boardColumn = 4;
//        var $boardRow = 4;
        function __construct(){
//            $this->GameDataFile = $_SERVER['DOCUMENT_ROOT']."/c4/static/data/GameData.json";
//            $this->PlayerStatusFile = $_SERVER['DOCUMENT_ROOT']."/c4/static/data/PlayerStatus.json";
            parent::__construct();
        }
	public function index()
	{
//            $data['boardColumn'] = $this->boardColumn;
//            $data['boardRow'] = $this->boardRow;
            
//            $this->UpdateJsonFile();
            $this->load->view('header');
            $this->load->view('content');
            $this->load->view('footer');
	}
//        function UpdateJsonFile() {
////
//            $r_data = array(1 => 
//                array(
//                "Player1IP" => "192.168.0.22",
//                "Player2IP" => "192.168.0.23",
//                "Board" => "a1,b1,c1,d1"
//                )
//            );
//            $filename = $this->GameDataFile;
//            $fp = fopen($filename, 'w');
//            fwrite($fp, json_encode($r_data));
//            fclose($fp);
//            exit;
//            }
            
            /*return player's IP Address*/
//            function GetPlayerIP(){
//                return $this->input->ip_address();
//            }
            
            /*this function returns player status from json feed like if player is still inactive or active; player's movement if waiting or done
            Example: 
            "1" : {
            "Player1IPStatus" : "active",
            "Player1Movement" : "done"
            "Player2IPStatus" : "inactive"
            "Player2Movement" : "waiting"
            }             */
//            function PlayerStatus() {
//               $filename = $this->PlayerStatusFile;
////               $file = file_get_contents($filename);
////               var_dump($file);
//            $fp = fopen($filename, 'w');
////            var_dump($fp);
//            fwrite($fp, 'kamoteka');
//            fclose($fp);
//            exit; 
//            }
//            function GameStatus() {
//                $file = file_get_contents($this->GameDataFile);
//                var_dump($file);
//                exit;
//            }
}
