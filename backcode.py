#coding:utf-8
import os
import subprocess
import filetype

copyfolder = ['assets']

def execute_cmd(command):
    try:
        subprocess.check_output(command, shell=True)
    except subprocess.CalledProcessError as ex:
        print command + " failed!"
        sys.exit(1)


def getallfile(path):
	allfile = []
	allfilelist  = os.listdir(path)
	for f in allfilelist:
		filepath =  os.path.join(path, f)
		if os.path.isdir(filepath):
		  getallfile(filepath)
		else:
		  allfile.append(filepath)
	return allfile

def getAllFolder(path):
	allfolder = []
	allfilelist	= os.listdir(path)
	for f in allfilelist:
		filepath = os.path.join(path, f)
		if os.path.isdir(filepath):
			allfolder.append(f)
	return allfolder

if __name__ == '__main__':
	path = '/Users/wenjie/workspace/cocoscreator/slot-mobile/'
	allfolder = getAllFolder(path);

	for folder in allfolder:
		if folder in copyfolder:
			command = 'cp -r '+ path + folder + ' ' + folder;
			execute_cmd(command)