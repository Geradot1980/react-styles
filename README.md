# react-styles
Изучение ReactJS. Стилизация компонент.


<b>Установка Styled components.</b> 
> npm install styled-components 

<b>Импорт компонента</b>
> import { styled } from "styled-components"

<b>Использование в коде</b>  
> const Button = styled.button\` <br>
	padding: 1rem 2rem;<br>
	font-weight: 600;<br>
	text-transform: uppercase;<br>
	border-radius: 0.25rem;<br>
	color: #1f2937;<br>
	background-color: #f0b322;<br>
	border-radius: 6px;<br>
	border: none;  <br> <br> 
	 	  &:hover {  
	background-color: #f0920e;  
}  
\`

<b>Использование в стилях условий и динамических изменений </b>   
> const Input = styled.input\`  
	width: 100%;  
	padding: 0.75rem 1rem;  
	line-height: 1.5;  
	background-color: \${({ \$invalid }) => (\$invalid ? '#fed2d2' : '#d1d5db')};  
	color: \${({ \$invalid }) => (\$invalid ? '#ef4444' : '#374151')};  
border: 1px solid \${({ \$invalid }) => (\$invalid ? '#f73f3f' : 'transparent')};  
border-radius: 0.25rem;  
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0   1px 2px 0 rgba(0, 0, 0, 0.06);
\`










___

### ver 0.2.0 30/06/2025

Перенесены Styled components во внешние файлы (компаненты). <br>
Применен паттерн объединения нескольких компонент в одну (Input.jsx)