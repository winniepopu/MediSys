# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse

from django.views.generic import View
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from .models import Patient, Post, Medicine, Disease, Drug
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
       {'MedData': [['med001', 'AAAA', 'QID', 'PC', 'PO', '0', ''], ['med002', 'BBBB', 'QID', 'PC', 'PO', '0', '']], 'patientID': 'L123123112', 'sym': '高血壓', 'days': '1'} 
       """
        # 新增post藥單
        select_patient = Patient.objects.get(cardID=Postdata['patientID'])
        new = Post(PatientID=select_patient,
                   symptom=Postdata['sym'], Days=Postdata['days'], CreateDate=Postdata['CreateDate'], TakeMedDate=Postdata['TakeMedDate'], Times=Postdata['Times'], AvaTimes=Postdata['AvaTimes'],)
        new.save()

        # 新增藥品Record
        pk = Post.objects.all().latest('id')
        for medi in Postdata['MedData']:
            newMedi = Medicine(
                PostID=pk,
                DrugCode=medi[0], medName=medi[1], Frequency=medi[2], UseTiming=medi[3], Way=medi[4], Quantity=medi[5], Description=medi[6])
            newMedi.save()

    return JsonResponse({"message": "藥單新增成功"})


"""    data = {
        'patientID': patientID,
        'sym': symptom,
        'days': days,
        'CreateDate': CreateDate,
        'TakeMedDate': TakeDate,
        'medData': med_Array

    }"""


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
        "Plist": Plist
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

        # book = models.Book.objects.filter(name='紅樓夢').first()
        # authors = book.author.all().values('name')

        selected_disease = Disease.objects.filter(Disease=disease).first()
        drug_list = selected_disease.Drugs.all()
        if drug_list.exists():
            results = drug_list.values_list(
                'DrugCode', 'MedName', 'Frequency', 'UseTiming', 'Part', 'Quantity', 'Discription')

            print("drug_list : ", results)

    # if drug_list.exists():
    #     results = drug_list.values_list(
    #         'medName', 'Time', 'Way', 'Quantity')

    #     # dd = list(drug_list)
    #     # print(dd)
    #     print(list(results))
    #     print("YES")
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
        Birth = request.POST.get('Birth')
        Sex = request.POST.get('Sex')
        Tel = request.POST.get('Tel')
        Cel = request.POST.get('Cel')
        Address = request.POST.get('Address')
        Mail = request.POST.get('Mail')

        new = Patient(cardID=cardID, Name=Name, Birth=Birth, Sex=Sex,
                      Telephone=Tel, Celephone=Cel, Address=Address, Mail=Mail)
        new.save()

    return JsonResponse({"message": "病患新增成功"})


def keyInfo(request):
    
    post_list = Post.objects.all()
    return render(request, 'keyInfo.html', {
        "post_list": post_list,
    })
