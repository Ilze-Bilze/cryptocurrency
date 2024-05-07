import { useLayoutDirection} from '../LayoutDirectionContext'
import variables from '../variables.module.scss'

export default function ToggleRTL() {
  const { isRTL, toggleLayoutDirection} = useLayoutDirection();

  return (
    <div className='mb-12'>
      <button style={{ backgroundColor: variables.primaryColor }} className='rounded-full py-2.5 px-3.5' onClick={() => {toggleLayoutDirection(!isRTL);}}>Toggle Layout</button>
      <div >
        {isRTL ? 'right content ' : 'left content '}
      </div>
    </div>
  );
}