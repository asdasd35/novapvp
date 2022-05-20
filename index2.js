function validate()
{
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value
    if(username=="admin"&& password=="user")
    {
        setTimeout(() => {
            window.location = 'webshop2.html'

        }, 1);
        return false
    }
else
{
    location.reload
}
}
