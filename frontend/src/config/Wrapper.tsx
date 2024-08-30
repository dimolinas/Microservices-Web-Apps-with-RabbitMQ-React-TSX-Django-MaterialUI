import React, { PropsWithChildren} from "react";
import Nav from "../interfaces/Nav";
import Menu from "../interfaces/Menu";
export {};


const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <Nav />
            <div style={{ display: 'flex' }}>
            <main role='main' style={{ flexGrow: 1, padding: '16px' }}>
                {props.children}
            </main>
        </div>
      </div>
    );
  };
  
export default Wrapper;