import { createGlobalStyle } from "styled-components";
// 

const GlobalStyle = createGlobalStyle`
    	*{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
        }

        html, body{
            overflow-x: hidden;
            
          
            background-color: #fff;
           

            
        }

        .active{
            background-color: rgba(99, 15, 0, .8);
    }
       
`;

export default GlobalStyle;