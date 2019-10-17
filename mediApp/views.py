# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse

from django.views.generic import View
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from .models import Patient, Post, Medicine, DiseaseDrug
from django.views.decorators.csrf import csrf_exempt


def gotoNew(request, cardID):
    # post = Post.objects.select_related('PatientID').get(id=pk)
    # medi_list = Medicine.objects.filter(PostID=pk)

    selected_Patient = Patient.objects.get(cardID=cardID)

    return render(request, 'new.html', {
        # "Patient_list": Patient_list,
        "patient": selected_Patient,
        "cardID": cardID,
    })


def gotoIndex(request):  # 開單頁面，只有搜尋欄

    return render(request, 'index.html', {
    })


@csrf_exempt
def addPost(request):
    if request.method == "POST":
        print(request.POST)
        Postdata = {}
        Postdata["MedData"] = []
        for meta in request.POST:
            if 'medData' in meta:
                Postdata["MedData"].append(request.POST.getlist(meta))
            else:
                Postdata[meta] = request.POST.get(meta)
        print(Postdata)
        """
        {'MedData': [['Aspirine', '早', '2', ''], ['sleepy med', '早', '1', '']], 'patientID': '1', 'sym': 'Sleep', 'days': '3'}
        """
        # 新增post藥單
        select_patient = Patient.objects.get(cardID=Postdata['patientID'])
        new = Post(PatientID=select_patient,
                   symptom=Postdata['sym'], Days=Postdata['days'])
        new.save()

        # 新增藥品Record
        pk = Post.objects.all().latest('id')
        for medi in Postdata['MedData']:
            newMedi = Medicine(
                PostID=pk, medName=medi[0], Time=medi[1], Way=medi[2], Quantity=medi[3], Description=medi[4])
            newMedi.save()

    return JsonResponse({"message": "藥單新增成功"})


def post(request, pk):
    post = Post.objects.select_related('PatientID').get(id=pk)
    medi_list = Medicine.objects.filter(PostID=pk)

    return render(request, 'oldPost.html', {
        "post": post,
        "medi_list": medi_list,

    })


def gotoAllpost(request):
    post_list = Post.objects.all()

    return render(request, 'search.html', {
        "post_list": post_list,

    })


def gotoRecord(request, cardID):
    selected_patient = Patient.objects.get(cardID=cardID)
    post_list = Post.objects.select_related(
        'PatientID').filter(PatientID=selected_patient)

    return render(request, 'history.html', {
        "post_list": post_list,
        "cardID": cardID,
        "patient": selected_patient,
    })


def gotoNewUser(request):
    return render(request, 'newUser.html', {
    })


def gotoMake(request):
    patient_list = Patient.objects.all().values_list(
        'cardID', 'Name')
    print(patient_list)
    Plist = []
    for i in patient_list:
        Plist.append(i[0] + " / " + i[1])
    print(Plist)

    return render(request, 'make.html', {
        "Plist":Plist
    })


def gotoMode(request, cardID):
    Patient_list = Patient.objects.all()
    if Patient.objects.filter(cardID=cardID).exists():
        selected_Patient = Patient.objects.get(cardID=cardID)

        return render(request, 'mode.html', {
            # "Patient_list": Patient_list,
            "patient": selected_Patient,
            "cardID": cardID,
        })
    else:
        return HttpResponse("查無此病患，請重新搜尋")


def gotoSickChoose(request, cardID):
    selected_patient = Patient.objects.get(cardID=cardID)
    post_list = Post.objects.select_related(
        'PatientID').filter(PatientID=selected_patient)

    return render(request, 'sickChoose.html', {
        "post_list": post_list,
        "cardID": cardID,
        "patient": selected_patient,
    })


@csrf_exempt
def findMed(request):
    if request.method == "POST":
        print(request.POST)
        disease = request.POST.get("disease")
        print(disease)
        drug_list = DiseaseDrug.objects.filter(Disease=disease)
        if drug_list.exists():
            results = drug_list.values_list(
                'medName', 'Time', 'Way', 'Quantity')

            # dd = list(drug_list)
            # print(dd)
            print(list(results))
            print("YES")
            return JsonResponse({"status": "success", "message": list(results)})

    return JsonResponse({"message": "YES"})

    # selected_patient = Patient.objects.get(cardID=cardID)
    # post_list = Post.objects.select_related(
    #     'PatientID').filter(PatientID=selected_patient)

    # return render(request, 'history.html', {
    #     "post_list": post_list,
    #     "cardID": cardID,

    # })

# Create your views here.
@csrf_exempt
def addUser(request):
    if request.method == "POST":
        print(request.POST)
        cardID = request.POST.get('cardID')
        Name = request.POST.get('Name')

        new = Patient(cardID=cardID, Name=Name)
        new.save()

    return JsonResponse({"message": "病患新增成功"})
