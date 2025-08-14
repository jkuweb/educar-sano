import { Banner } from '@payloadcms/ui/elements/Banner'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className="baseClass">
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>🖐 ¡Bienvenido a tu panel de control!</h4>
      </Banner>
      <p>Puedes empezar por:</p>
      <ul className={`${baseClass}__instructions`}>
        <li>
          <a href="/" target="_blank">
            Visitar tu página web
          </a>
        </li>
        <li>
          <a href="mailto:contacto@josebaquerejeta.com">Realizar una consulta</a>
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
