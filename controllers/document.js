const models = require('../models');
const catchAsyncErrors=require("../middleware/catchAsyncError");

//To upload RC book

exports.uploadRCBook = catchAsyncErrors(async (req, res, next) => {
    try {
      const { DocumentID,UserID, DocumentFile, UploadDate } = req.body;
  
      const newRCBook = await models.Documents.create({
        DocumentID,
        UserID,
        DocumentType: 'RCBook',
        DocumentFile,
        UploadDate,
      });
  
      return res.status(201).json({
        message: 'RC book uploaded successfully',
        rcBook: newRCBook,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading RC book',
        error: error.message,
      });
    }
});

//To upload insurance

exports.uploadInsurance = catchAsyncErrors(async (req, res, next) => {
    try {
      const { DocumentID,UserID, DocumentFile, UploadDate } = req.body;
  
      const newInsuranceDoc = await models.Documents.create({
        DocumentID,
        UserID,
        DocumentType: 'Insurance',
        DocumentFile,
        UploadDate,
      });
  
      return res.status(201).json({
        message: 'Insurance document uploaded successfully',
        insuranceDocument: newInsuranceDoc,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading insurance document',
        error: error.message,
      });
    }
});
  

//To upload EC

exports.uploadEC = catchAsyncErrors(async (req, res, next) => {
    try {
      const { DocumentID,UserID, DocumentFile, UploadDate } = req.body;
  
      const newECDoc = await models.Documents.create({
        DocumentID,
        UserID,
        DocumentType: 'EC',
        DocumentFile,
        UploadDate,
      });
  
      return res.status(201).json({
        message: 'EC document uploaded successfully',
        ecDocument: newECDoc,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading EC document',
        error: error.message,
      });
    }
});
  
//To upload property tax document

exports.uploadPropertyTax = catchAsyncErrors(async (req, res, next) => {
    try {
      const { DocumentID,UserID, DocumentFile, UploadDate } = req.body;
  
      const newPropertyTaxDoc = await models.Documents.create({
        DocumentID,
        UserID,
        DocumentType: 'PropertyTax',
        DocumentFile,
        UploadDate,
      });
  
      return res.status(201).json({
        message: 'Property tax document uploaded successfully',
        propertyTaxDocument: newPropertyTaxDoc,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading property tax document',
        error: error.message,
      });
    }
});

//To upload EBBill

exports.uploadEBBill = catchAsyncErrors(async (req, res, next) => {
    try {
      const { DocumentID,UserID, DocumentFile, UploadDate } = req.body;
  
      const newEBBillDoc = await models.Documents.create({
        DocumentID,
        UserID,
        DocumentType: 'EBBill',
        DocumentFile,
        UploadDate,
      });
  
      return res.status(201).json({
        message: 'EB bill document uploaded successfully',
        ebBillDocument: newEBBillDoc,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error uploading EB bill document',
        error: error.message,
      });
    }
});
  