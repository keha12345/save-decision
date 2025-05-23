
import Hero from '../elements/Hero'
import Accardion from '../elements/Accardion'
import QuestionBlock from '../elements/QuestionBlock'

export default function Faq({}){

    return <>

    <Hero slides={[{
        bg: 'media/hero_plane.png',
        title: 'Часто задаваемые вопросы'
    }]}  ch={256}/>
  

  <Accardion list={[
    {
        q: 'Может ли измениться цена в процессе сотрудничества?',
        a: 'Нет, не может. Мы сразу обговариваем с вами цену с учётом всех дополнительных расходов и прописываем её в договоре',
    },
    {
        q: 'Вы доставляете грузы только в Москву?',
        a: 'Изначально товары приходят на наш склад в Москве, отсюда мы можем отправить груз в любой город России',
    },
    {
        q: 'Работаете ли вы с физическими лицами?',
        a: 'Да, работаем',
    },
    {
        q: 'Может ли товар приехать в Россию испорченным? Как быть в случае брака?',
        a: <>Мы делаем всё, чтобы минимизировать риски:<br/>
        - тщательно проверяем товар у себя на складах в Китае<br/>
        - у нас трёхуровневая упаковка (плотный картон+скотч, мешок от влаги, деревянная обрешётка)
        <br/><br/>
        Но самое главное, <b>мы страхуем груз не только от потери, но и от брака</b>
        Поэтому, если вдруг ваш товар придёт испорченным, мы вам вернём за него деньги</>,
    },
    {
        q: 'Какие гарантии, что груз придёт вовремя? Как быть в случае задержки?',
        a: <>Мы прописываем срок доставки в договоре и <b>компенсируем</b> вам каждый просроченный день</>,
    },
    {
        q: 'Из чего формируется стоимость доставки? Какие данные нужны для расчёта?',
        a: 'Стоимость доставки зависит от плотности груза. Для получения расчёта вам необходимо предоставить наименование груза, вес и объём, а также указать предпочтительный способ доставки',
    }
  ]} />


  
  <QuestionBlock />


  
</>
}