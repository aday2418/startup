# January 22th Notes

### Domain Names
+ Domain names provide a human readable address for any web server available on the internet
+ Domain names point to ip addresses
+ They can be rented from services such as [Amazon's Route 53](https://aws.amazon.com/route53/) or [Namecheap](https://www.namecheap.com/)
+ You can get information about a domain name from the domain name registry using the [whois](https://who.is/) console utility
+ The domain name for my site is [soundcircle.xyz](https://soundcircle.xyz)

### HTTP
+ It is a bad idea to host a website using http because it leaves user information exposed
+ If navigating to an http site, your browser will warn you that the site is not secure
+ Without a secure connection anyone has access to the network traffic, at any point, from the user's computer to the server handling the request could easily capture all the data sent in either direction
    + This is done easily using traceroute

### HTTPS
+ HTTPS is the secure version of HTTP that encrypts user information using the TLS protocol
+ Requires a web certificate to verify authenticity
+ Web certificates are generated by a trusted 3rd party using public/private key encryption
    + These used to be expensive but now a service called LetsEncrypt does it for free
+ The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate
+ Once you have a certificate for your domain name, you can serve the certificate from your web server and then the browser can validate the certificate by using the public keys of the certificate issuer
+ To enable https using AWS we used the library **Caddy**
    + In order to route trafic securely through your domain name change ```:80``` to ```[yourDomainName]```
    + Anywhere else that is orignally termed ```yourdomain``` should also be changed to ```[yourDomainName]```
