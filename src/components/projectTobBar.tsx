import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import YourdLogo from '../assets/img/YourDLogo.png';
import { projectModalState } from '../recoil/dashBoard/project';

export default function ProjectTopBar() {
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useRecoilState(projectModalState);
    return (
        <div className="h-[48px] flex">
            <img src={YourdLogo} onClick={()=> navigation('/')} className="flex h-[48px] ml-32" />
            {/* <Button
              className="py-2 bg-gray-500 rounded-[36px]  mt-3"
              onClick={() => setIsOpen(true)}
            >
              New Project
            </Button> */}
        </div>
    )
}