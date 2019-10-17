"""MediSys URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from mediApp.views import post, gotoNew, addPost, gotoRecord, gotoAllpost, findMed, gotoIndex, gotoNewUser, gotoMake, gotoMode, gotoSickChoose, addUser


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^login/', login, name="login"),

    url(r'^index/', gotoIndex, name="index"),
    url(r'^post/(?P<pk>\d+)/$', post, name="post"),
    url(r'addPost/$', addPost, name="addPost"),
    url(r'^new/(?P<cardID>.*)/$', gotoNew, name="gotoNew"),
    url(r'^record/(?P<cardID>.*)/$', gotoRecord, name="gotoRecord"),
    url(r'^search/$', gotoAllpost, name="gotoAllpost"),
    url(r'^findMed/$', findMed, name="findMed"),
    url(r'^newUser/$', gotoNewUser, name="gotoNewUser"),
    url(r'^make/$', gotoMake, name="gotoMake"),
    url(r'^mode/(?P<cardID>.*)/$', gotoMode, name="gotoMode"),
    url(r'^sickChoose/(?P<cardID>.*)/$', gotoSickChoose, name = "gotoSickChoose"),
    url(r'addUser/$', addUser, name="addUser"),
    # url(r'^download/(?P<pk>\d+)/$', file_download, name="download"),

    # url(r'^post/add', add, name="add"),
    # url(r'^post/delete', delete, name="delete"),



]
