import './index.css'
import BaseComponent from '../../../commonComponent/BaseComponent'
import igameBase from 'igame_base_libs';
const {
    CookieUtil
} = igameBase;

class Index extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.fetchApi(`/pass/get/hcenter/user/game/recentPlay?authcookie=${CookieUtil.get('P00001')}`).then((data)=>{
            console.log(data);
        })
    }

    render() {
        return (
            <div className="game-home">{this.props.id}</div>
        )
    }
}



export default Index