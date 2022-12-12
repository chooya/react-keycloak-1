export default function Validator (values) {

    // const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

    const showMessage = (text) => {
        alert(text)
    }

    if (!values.username) {
       showMessage("아이디를 입력하세요. ")
          return false
    }else if (values.password < 2 ){
        showMessage("패스워드는 2자리 이상 입력하셔야 합니다.")
         return false
    }else {
        return true
    }
}