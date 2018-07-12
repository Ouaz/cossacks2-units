/* Some Simple Javascript Calculator
 * Author: Eugene Shashkov
 * https://github.com/fonjeekay/some-simple-javascript-calculator
 * Version: v1.3
 */
				var sign;
				var some_key;
				var result=0;
				var gime_some_num;
				var str_length;
				var str_of_last_symbol;
				var str_of_current_symbol;
				var equal_done=false;
				var ok_eval=false;		
				var i2=0;
				var times_of_operations_pressed=0;
				var point_once=0;			
				//////// some point helper variable
					var a;
					var last_some_plus_minus_char=false;
					var last_point_place=false;
					var string_to_test=false;
					
					
					///// test_eval
					
					var test_eval;
				
				
				/////// variables to help for point
				
				var some_point_variable_1;
				
				///// if program just started result=0 ...
															
				function result_zero(gime_some_num){
				if(gime_some_num===0) {return true;} else {return false;}  ///// ??? 3-? ????? 0. = 0  /// without ===    case  ('0.'=0)  
				console.log('result_zero is ok');
				}
				
				
				
				////////////////// if = was pressed already
				////// to remove string + number 1 2 3 4 5 6 7.... //// now its result=0 ...means its ready to new operations
				function if_equal_done(){
				if(equal_done==true){
				result=0;
				equal_done=false;
				return result;
				}
				}
				
				
				
				///// 1 2 3 4 5 6 7 8 9 to string
															
                function some_math(some_key){
				
				if_equal_done();                            ///// if '=' was pressed in past then result=0
								
				if(result_zero(result)==true){
				result=some_key;
				console.log('some_math part 1 ');           ///// CONSOLE
				} else {
				result=String(result)+String(some_key);
				console.log('some_math part 2 ');           ///// CONSOLE
				}
				
				console.log('some_math going to return ');  ///// CONSOLE
				
				return result;
				}
				
				
				
				
				
				//////////////// point helpers
				

					function parse_all_symbols(){
					
					str_of_last_symbol=result.slice(-1);
					console.log(' last symbol = '+str_of_last_symbol);
					console.log('length of the string = '+result.length);

					for(var i=1;i<=result.length;i++){
					a=(result.length-i);
					str_of_current_symbol=result.charAt(a);
					console.log(' current symbool = '+ str_of_current_symbol);

					if(str_of_current_symbol=='+' || str_of_current_symbol=='-' 
					|| str_of_current_symbol=='*' || str_of_current_symbol=='/'){
					last_some_plus_minus_char=a;
					break;
					}
					console.log(' str_of_current_symbol = '+str_of_current_symbol);
					
					if(str_of_current_symbol=='.'){
					last_point_place=a;
					}
					/////////// here we can do something with our string
					}
					
					
					///////// string to test
					string_to_test=result.substring(last_some_plus_minus_char, result.length);
					console.log(' string_to_test = '+string_to_test);
					/////////// 85.
					if(last_some_plus_minus_char===false && last_point_place==false){
					result=String(result)+'.';
					return result;
					}
					/////85.98+87
					if(last_some_plus_minus_char!==false && last_point_place===false){
					result=String(result)+'.';
					return result;
					}
					
					
					}
					
				//////////////////////////  POINT	///////////////////////////////////////////			
				function point_pressed(){
				
				
				
				console.log('point pressed');
				
				if(equal_done==true){
				return result;
				}
				
				////////// need always convert result into string if we check it like a string!!!!!!!!!!!!!!!
				result=String(result);
				str_of_last_symbol=result.slice(-1);
				if(str_of_last_symbol=='.'){
				return result;
				}
				
				if(str_of_last_symbol!='+' && str_of_last_symbol!='-' && str_of_last_symbol!='*' && str_of_last_symbol!='/' ){
				
				
				
				////// ?????can be some parse code here, nothing special now :)
				
				console.log(' simple part is working ');
				parse_all_symbols();
				
				}
				return result;
				}
				
				
			function some_root(){
		
			var first_char;
			if (result.length>1){
			first_char=result.substring(0, 1);
			}else first_char=result;
			
			if(times_of_operations_pressed<1 && first_char!='-'){
			result=Math.sqrt(result);
			}else {
			equal(); /////////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			result=Math.sqrt(result);
			}
			
			return result;
			}
			
			
			
			
				
		        //// M A T H    O P E R A T I O N S      ////////////////
				function some_math_operations(sign){
				result=String(result);
				str_of_last_symbol=result.slice(-1);
				if(str_of_last_symbol=='.'){
				result.slice(0,-1);
				point_once=0;
				return result;
				}
				
				
				times_of_operations_pressed++;
				equal_done=false;
				console.log('Math operations started ');   ///// CONSOLE
				if(result=='0'){
				if(sign=='-'){
				result='-';
				return result; //// if result=0 and '-' button is pressed, we change '0' to '-' which is equal but first case is not appropriate
				}
				console.log('Math point 1 ');
				result='0'+String(sign);
				return result;} else {
						
							if(result.length>=2){
							console.log('Math point 2 ');
							str_of_last_symbol=result.slice(-1);//// crop the last symbol to some variable
							}
				if(str_of_last_symbol=='+' || str_of_last_symbol=='-' || str_of_last_symbol=='*' || str_of_last_symbol=='/'){
				console.log('Math point 3 ');
				result=result.substring(0, result.length - 1);   /////  delete last symbol 
				}                                                /////  and place our symbol what we need
				result=String(result)+String(sign);}
				
				console.log('Math point string is ready!  << - - Math is return some result - - >> ');
				return result;
				}

				
				
				function ready_to_val(){
				console.log('ready to wal is Working');
				var sub1=0;
				var sub2=1;
				
				var one_number_exist=false;
				var few_numbers_exists=false;
				while (sub2<=result.length){
				str_of_current_symbol=result.substring(sub1,sub2);
				
				if(str_of_current_symbol=='+' || str_of_current_symbol=='-' || 
				str_of_current_symbol=='*' || str_of_current_symbol=='/'){
				console.log(sub2+ ' sub 2 ' );
				if(sub2>=2 && (result.length-sub2)>0){
				return true;}}
				sub1++;
				sub2++;}}
				
				
				//////  == helper
				
				function go_or_return(){
				test_eval=eval(result);
				if(result==test_eval)return result;
				}
			
			    ////////// = = = = = = =  /////////////////////
				function equal(){
				go_or_return();
				times_of_operations_pressed=0;
							console.log('eval begin... result =' + result);
							if(result!=0 && result.length>1 && result!='+' && result!='-' && result!='*' && result!='/'){
							////////////////// Uncaught SyntaxError: Unexpected end of input (to give it away we need to do next if)
								if(result.length>=2){
								console.log('Math point 2 ');
								
								
								
								
								
								str_of_last_symbol=result.slice(-1);
										if(str_of_last_symbol=='+' || str_of_last_symbol=='-'
										|| str_of_last_symbol=='*' || str_of_last_symbol=='/' || str_of_last_symbol==='.'){
										result=result.substring(0, result.length - 1);} ///// delete last symbol if its don't needed
										
							console.log('< - - E V A L - - >');

							var check_ready_to_val=ready_to_val();
							
							console.log(' check_ready_to_val '+check_ready_to_val);
							
							if(check_ready_to_val==true){
							
							console.log('ready to wal is true ');
							console.log('result = '+ result);
	////////!!!!!!!!!!!!!!!!!!!!!!!!!!!		
							
							/// point variables to false
							
							
							last_some_plus_minus_char=false;
							last_point_place=false;
							string_to_test=false;
							
							
							
							result=eval(result);             //////////////////////////    the main shit
							console.log('result = '+ result);
							}
													
							equal_done=true;               //////////// !!!!!!!!!!!!!!
							if(result!='undefined'){
							return result;
							}else return 'try again';
							
							}
							}else {
							equal_done=true;       /////// !!!!!!!!!!!!!!!!!!!
							console.log('equal last part result=  '+ result);
							return result;} ;
							}
				
				
				//////  R E S E T /////////
				
				function reset_this_up(){
				equal_done=false;
				result=0;
				
				last_some_plus_minus_char=false;
				last_point_place=false;
				string_to_test=false;
				
				return result;
				}
				
				/////////Math.sqrt(8912389.9);
				