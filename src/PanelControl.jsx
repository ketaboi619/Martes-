
import MenuLateral from './MenuLateral'
import Card from './Card'

export const PanelControl = () => {
  return (
    <section className="panel-control">

      <MenuLateral/>

      <div className="panel-control-contenido">
        <Card/>
        <Card/>
        <Card/>
      </div>

      

    </section>
  )
}

export default PanelControl