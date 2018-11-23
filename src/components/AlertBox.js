class AlertBox {

    show(context, btAditional) {
        return new Promise(resolve => {
            const body = document.createElement('div');
            const dv1 = document.createElement('div');
            const dv2 = document.createElement('div');
            const dv3 = document.createElement('div');
            const message = document.createElement('div');
            const footer = document.createElement('div');
            const button = document.createElement('button');

            body.className = 'modal fade show';
            body.role = 'dialog';
            body.tabIndex = -1;
            body.style = 'display: block;';
            body.id = 'message_box';
            
            dv1.className = 'modal-dialog';
            dv2.className = 'modal-content';
            dv3.className = 'modal-body';

            footer.className = 'modal-footer';

            message.innerHTML = context;
            button.textContent = 'Ok';
            button.className = 'button-default all btn btn-secondary';
            button.onclick = () => {
                const element = document.getElementById('message_box');
                document.getElementsByTagName('body')[0].removeChild(element);
                resolve(1);
            };

            if (btAditional) {
                const otherButton = document.createElement('button');
                otherButton.textContent = btAditional;
                otherButton.className = 'button-default all btn btn-secondary';
                otherButton.onclick = () => {
                    const element = document.getElementById('message_box');
                    document.getElementsByTagName('body')[0].removeChild(element);
                    resolve(2);
                };
                footer.appendChild(otherButton);
            }
            footer.appendChild(button);
            dv3.appendChild(message);
            dv2.appendChild(dv3);
            dv2.appendChild(footer);
            dv1.appendChild(dv2);
            body.appendChild(dv1);

            document.getElementsByTagName('body')[0].appendChild(body);
        });
    }
}

export default (new AlertBox());