import CheckOut from "../components/checkout/Checkout";
import { PrivateRoute } from "../private/private.route";

export default function CheckOutPage(){
    return (
        <PrivateRoute>
            <div><CheckOut /></div>
        </PrivateRoute>
    );
}