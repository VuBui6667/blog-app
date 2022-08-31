import React, {ReactNode} from 'react'
import Sidebar from '../Sidebar/index'
import ModalAdd from '../ModalAdd/index'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

interface ILayoutProps {
    children?: ReactNode
}

function Layout({children, ...props}: ILayoutProps): JSX.Element {
  const toggleModal = useSelector((state:RootState) => state.modalAddReducer.openModal)
  return (
    <>
    {
      toggleModal && <ModalAdd/>
    }
    <Sidebar/>
    <main>{children}</main>
    </>
  )
}

export default Layout