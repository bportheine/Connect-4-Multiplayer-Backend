import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Pads, Symbol, Row } from './entities';



export const generateArray=()=>{
  var letter = ['R', 'G', 'B', 'Y'];
  var randomL=letter[Math.floor(Math.random() * letter.length)];
 return [randomL];
 }

export const PadsShowed=()=>{
  return
}
