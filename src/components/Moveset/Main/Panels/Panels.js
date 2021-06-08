import { useContext } from 'react';
import Context from 'components/Moveset/Context';
import Wrapper from 'components/Moveset/Main/Panels/Wrapper';
import Panel from 'components/Moveset/Main/Panels/Panel';
import Row from 'components/Moveset/Main/Panels/Row';

const Panels = () => {

  const { moveset } = useContext(Context);

  return(
    <Wrapper>
      <Panel>
        <Row>
          <div>ABILITY</div>
          <div>{moveset.ability}</div>
        </Row>
        <Row>
          <div>NATURE</div>
          <div>{moveset.nature}</div>
        </Row>
        <Row>
          <div>HELD ITEM</div>
          <div>{moveset.heldItem}</div>
        </Row>
        <Row>
          <div>EVs</div>
          <div>
            {moveset.evs.map((item,i)=>{
              if(i===0)
                return `${item.num} ${item.name}`
              else
                return ` / ${item.num} ${item.name}`
            })}
          </div>
        </Row>
      </Panel>

      <Panel>
        {
          moveset.moves.map((move,i)=>
            (<Row key={i}>
              <div>{`MOVE #${i+1}`}</div>
              <div>{move}</div>
            </Row>)
          )
        }
      </Panel>
    </Wrapper>
  )
};

export default Panels;
