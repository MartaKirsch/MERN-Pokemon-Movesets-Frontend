import { useContext } from 'react';
import Wrapper from 'components/Pokemon/Main/PokeInfo/General/Evolutions/Wrapper';
import Evolution from 'components/Pokemon/Main/PokeInfo/General/Evolutions/Evolution/Evolution';
import Context from 'components/Pokemon/Context';

const Evolutions = () => {

  const { evolution } = useContext(Context);


  let evolutions = [];


  evolution.chain.evolves_to.forEach((item, i) => {

    let ids = [];
    let texts = []
    let num = 1;
    const details = item.evolution_details[0];

    let text = "";

    //trigger is level up and level is not set
    if(details.trigger.name ==="level-up" && !details.min_level)
      text="Level up";

    //trigger is level and level is set
    else if(details.trigger.name ==="level-up")
      text="Level "+details.min_level;

    //trigger is held item
    else if(details.trigger.name ==="use-item")
      text="Use "+details.item.name;

    //trigger is by trade
    else if(details.trigger.name ==="trade" && details.held_item)
      text="Trade with "+details.held_item.name;


    //trigger is by trade
    else if(details.trigger.name ==="trade")
      text="Trade";


    //other info
    if(!details.trigger.name ==="trade" && details.held_item)
      text+=", holding "+details.held_item.name;

    if(details.time_of_day)
      text+=", during "+details.time_of_day;

    if(details.min_happiness)
      text+=", happiness "+details.min_happiness;

    texts.push(text);

    const reg1 = /\/\d{1,}\/?$/;
    let id = evolution.chain.species.url.match(reg1)[0];
    const reg2 = /\d{1,}/;
    id=id.toString().match(reg2)[0];
    ids.push(id);

    id = item.species.url.match(reg1)[0];
    id=id.toString().match(reg2)[0];
    ids.push(id);

    if(item.evolves_to.length>0)
    {
      num=2;
      item.evolves_to.forEach((nextItem, i) => {
        const details2 = nextItem.evolution_details[0];

        text = "";

        //trigger is level up and level is not set
        if(details2.trigger.name ==="level-up" && !details2.min_level)
          text="Level up";

        //trigger is level and level is set
        else if(details2.trigger.name ==="level-up")
          text="Level "+details2.min_level;

        //trigger is held item
        else if(details2.trigger.name ==="use-item")
          text="Use "+details2.item.name;

        //trigger is by trade (item)
        else if(details2.trigger.name ==="trade" && details.held_item)
          text="Trade with "+details.held_item.name;

        //trigger is by trade
        else if(details2.trigger.name ==="trade")
          text="Trade";


        //other info
        if(!details.trigger.name ==="trade" && details2.held_item)
          text+=", holding "+details2.held_item.name;

        if(details2.time_of_day)
          text+=", during "+details2.time_of_day;

        if(details2.min_happiness)
          text+=", happiness "+details2.min_happiness;

        texts.push(text);

        id = nextItem.species.url.match(reg1)[0];
        id=id.toString().match(reg2)[0];
        ids.push(id);

        evolutions.push(<Evolution howManyStages={num} key={nextItem.species.name} ids={ids} texts={texts}/>);
      });

    }

    if(num===1)
      evolutions.push(<Evolution howManyStages={num} key={item.species.name} ids={ids} texts={texts}/>);
  });


  return(
    <Wrapper>

      {evolutions}
    </Wrapper>
  )
};

export default Evolutions;
