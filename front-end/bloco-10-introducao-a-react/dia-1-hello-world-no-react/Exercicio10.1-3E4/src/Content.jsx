import React from 'react';
import "./ex4.css";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const list = conteudos.map((item) => 
  <div key={item.conteudo} className='Card'>
    <p><b>O conteúdo é:</b> {item.conteudo}</p>
    <p><b>Status:</b> {item.status}</p>
    <p><b>Bloco:</b> {item.bloco}</p>
  </div>
  )

class Content extends React.Component {
    render() {
        return (
            <div className='CardBox'>
              {list}
            </div>
          );
    }
}

export default Content;
