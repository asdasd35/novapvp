function validate()
{
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value
    if(username=="admin"&& password=="user")
    {
        setTimeout(() => {
            window.location = 'webshop2.html'

        }, 2);
        return false
    }
else
{
    location.reload
}

    if(username=="asdasd35"&& password=="asdasd")
    {
        setTimeout(() => {
            window.location = 'webshop2.html'

        }, 2);
        return false
    }
else
{
    location.reload
}
}
