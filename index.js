'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1] MembersihkanMengikuti",
        "[2] Mengikuti  Target",
        "[3] Mengikuti tanpa menyukai",
	"[4] Mengikuti tanpa coment dan like ",
        "\n"
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] Membersihkan mengikuti":
        const unfollall = require('./unfollall.js');
        await unfollall();
        break;
      case "[2] Mengikuti Target":
        const fftauto = require('./fftauto.js');
        await fftauto();
        break;
		
	   case "[3] Mengikuti Tanpa Menyukai":
        const fft = require('./fft.js');
        await fft();
        break;

	   case "[4] Mengikuti Tanpa Menyukai dan coment":
        const fftold = require('./fftold.js');
        await fftold();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2019
   ║ │ ││ ││  └─┐   SGBTeam 
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
      `);

main()
