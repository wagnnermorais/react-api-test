import e, { Request, Response } from "express"
import { MovieModel } from "../models/Movie"
import Logger from "../../config/logger"

export async function createMovie(request: Request, response: Response) {
  try {
    const data = request.body
    const movie = await MovieModel.create(data)

    return response.status(201).json(movie)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }
}

export async function findMoveById(request: Request, response: Response) {
  try {
    const id = request.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return response.status(404).json({ error: "O filme não existe ou não foi encontrado." })
    }

    return response.status(200).json(movie)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }
}

export async function getAllMovies(request: Request, response: Response) {
  try {
    const movies = await MovieModel.find()
    return response.status(200).json(movies)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }
}

export async function removeMovie(request: Request, response: Response) {
  try {
    const id = request.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return response.status(404).json({ error: "O filme não existe ou não foi encontrado." })
    }

    await movie.deleteOne()

    return response.status(200).json({ message: "Filme removido com sucesso!" })
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }
}

export async function updateMovie(request: Request, response: Response) {
  try {
    const id = request.params.id
    const data = request.body
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return response.status(404).json({ error: "O filme não existe ou não foi encontrado." })
    }

    await MovieModel.updateOne({ _id: id }, data)

    return response.status(200).json(data)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }
}