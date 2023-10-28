from django.urls import include, path
from djoser.views import TokenCreateView

<<<<<<< HEAD
from .views import TokenCreateByPhoneView, send_banquet, send_order
=======
from .views import (TokenCreateByPhoneView, payment, send_banquet, send_hookah,
                    send_order)
>>>>>>> f80f8505cef0b4a14a9bd302d83b3daf758651a4

urlpatterns = [
    path('', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/token-email/',
         TokenCreateView.as_view(),
         name='token_email'
         ),
    path(
        'auth/token-phone/',
        TokenCreateByPhoneView.as_view(),
        name='token_phone'
    ),
    path('send-order/', send_order, name='send_order'),
    path('send-banquet/', send_banquet, name='send_banquet'),
<<<<<<< HEAD
=======
    path('send-hookah/', send_hookah, name='send_hookah'),
    path('payment/', payment, name='payment'),
>>>>>>> f80f8505cef0b4a14a9bd302d83b3daf758651a4
]
