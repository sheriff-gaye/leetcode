# Import QRCode from pyqrcode 
import pyqrcode 
import png 
from pyqrcode import QRCode 


s = "https://meet.google.com/rfc-sniv-xcs"

url = pyqrcode.create(s) 

url.svg("myqr.svg", scale = 8) 

url.png('myqr.png', scale = 6) 
