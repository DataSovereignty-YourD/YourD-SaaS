import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../recoil/loginState";

export default function SignInBox() {
    const navigation = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let qrData = {
        authCode: queryParams.get("authcode")
    }
    const [time, setTime] = useState(false);
    const [count, setCount] = useState(-2);
    const [isLogin,setIsLogin] = useRecoilState(loginState);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [count]);

    useEffect(() => {
        if (count === -1) {
          setTime(false);
          setIsLogin(true);
          window.close();
        }
      }, [count]);

    const login = () => {
        //yourD 서버로 유저가 검증됐는지 요청해야함.
        // 확인후 true면 로그인
        setTime(true);
        // window.opener.postMessage({loginStatus: true}, "*");
        setIsLogin(true);
        setCount(5);
        navigation('/project');
    }
    const YourDVCInfo = {
        "header": {
            "alg": "ES256",
            "type": "JWT"
        },
        "payload": {
            "vc": {
                "@context": "",
                "type": "",
                "issuer":"YourD",
                "credentialSubject": {
                    "id": "YourD",
                    "service": "YourD",
                    "type": "Privacy",
                    "loginInfo": {
                        "nickName": "nickName"
                    }
                }
                
            }
        },
        "rawJWT": "header.payload.signature"
    }
    
    return (
        <div className="w-1/3 h-2/3 grid place-items-center text-center mb-10 border rounded-3xl py-10">
            <div className="text-3xl font-semibold mb-4">
                Scan QR code
            </div>
            <div>Scan this QR code in YourD-app to verify an account</div>
            <div className="grid place-items-center my-5">
                <QRCode
                    size={200}
                    bgColor="white"
                    fgColor="black"
                    value={JSON.stringify(YourDVCInfo)}
                    className="p-4 border-2 rounded-3xl"
                    
                />
            </div>
            <div
                className="text-xl">Don't have YourD-App?
                <div className="text-lg">
                    Download App
                </div>
            </div>
            <Button
                onClick={() => login()}
                className="grid w-[300px] h-10 place-items-center bg-[#F4E55B] rounded-sm text-black">
                Continue
            </Button>
        </div>
    )
}
